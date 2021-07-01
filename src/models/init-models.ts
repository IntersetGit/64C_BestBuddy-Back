import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { insurance } from "./insurance";
import type { insuranceAttributes, insuranceCreationAttributes } from "./insurance";
import { insurance_mas_plan } from "./insurance_mas_plan";
import type { insurance_mas_planAttributes, insurance_mas_planCreationAttributes } from "./insurance_mas_plan";
import { insurance_mas_protection } from "./insurance_mas_protection";
import type { insurance_mas_protectionAttributes, insurance_mas_protectionCreationAttributes } from "./insurance_mas_protection";
import { insurance_price } from "./insurance_price";
import type { insurance_priceAttributes, insurance_priceCreationAttributes } from "./insurance_price";
import { mas_age_range } from "./mas_age_range";
import type { mas_age_rangeAttributes, mas_age_rangeCreationAttributes } from "./mas_age_range";
import { mas_beneficiary_relation } from "./mas_beneficiary_relation";
import type { mas_beneficiary_relationAttributes, mas_beneficiary_relationCreationAttributes } from "./mas_beneficiary_relation";
import { mas_district } from "./mas_district";
import type { mas_districtAttributes, mas_districtCreationAttributes } from "./mas_district";
import { mas_installment } from "./mas_installment";
import type { mas_installmentAttributes, mas_installmentCreationAttributes } from "./mas_installment";
import { mas_insurance_type } from "./mas_insurance_type";
import type { mas_insurance_typeAttributes, mas_insurance_typeCreationAttributes } from "./mas_insurance_type";
import { mas_marital_status } from "./mas_marital_status";
import type { mas_marital_statusAttributes, mas_marital_statusCreationAttributes } from "./mas_marital_status";
import { mas_occupation } from "./mas_occupation";
import type { mas_occupationAttributes, mas_occupationCreationAttributes } from "./mas_occupation";
import { mas_payer_relation } from "./mas_payer_relation";
import type { mas_payer_relationAttributes, mas_payer_relationCreationAttributes } from "./mas_payer_relation";
import { mas_province } from "./mas_province";
import type { mas_provinceAttributes, mas_provinceCreationAttributes } from "./mas_province";
import { mas_ref_policy_rel } from "./mas_ref_policy_rel";
import type { mas_ref_policy_relAttributes, mas_ref_policy_relCreationAttributes } from "./mas_ref_policy_rel";
import { mas_sub_district } from "./mas_sub_district";
import type { mas_sub_districtAttributes, mas_sub_districtCreationAttributes } from "./mas_sub_district";
import { mas_title_name } from "./mas_title_name";
import type { mas_title_nameAttributes, mas_title_nameCreationAttributes } from "./mas_title_name";
import { match_protection_plan } from "./match_protection_plan";
import type { match_protection_planAttributes, match_protection_planCreationAttributes } from "./match_protection_plan";

export {
  SequelizeMeta,
  insurance,
  insurance_mas_plan,
  insurance_mas_protection,
  insurance_price,
  mas_age_range,
  mas_beneficiary_relation,
  mas_district,
  mas_installment,
  mas_insurance_type,
  mas_marital_status,
  mas_occupation,
  mas_payer_relation,
  mas_province,
  mas_ref_policy_rel,
  mas_sub_district,
  mas_title_name,
  match_protection_plan,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  insuranceAttributes,
  insuranceCreationAttributes,
  insurance_mas_planAttributes,
  insurance_mas_planCreationAttributes,
  insurance_mas_protectionAttributes,
  insurance_mas_protectionCreationAttributes,
  insurance_priceAttributes,
  insurance_priceCreationAttributes,
  mas_age_rangeAttributes,
  mas_age_rangeCreationAttributes,
  mas_beneficiary_relationAttributes,
  mas_beneficiary_relationCreationAttributes,
  mas_districtAttributes,
  mas_districtCreationAttributes,
  mas_installmentAttributes,
  mas_installmentCreationAttributes,
  mas_insurance_typeAttributes,
  mas_insurance_typeCreationAttributes,
  mas_marital_statusAttributes,
  mas_marital_statusCreationAttributes,
  mas_occupationAttributes,
  mas_occupationCreationAttributes,
  mas_payer_relationAttributes,
  mas_payer_relationCreationAttributes,
  mas_provinceAttributes,
  mas_provinceCreationAttributes,
  mas_ref_policy_relAttributes,
  mas_ref_policy_relCreationAttributes,
  mas_sub_districtAttributes,
  mas_sub_districtCreationAttributes,
  mas_title_nameAttributes,
  mas_title_nameCreationAttributes,
  match_protection_planAttributes,
  match_protection_planCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  insurance.initModel(sequelize);
  insurance_mas_plan.initModel(sequelize);
  insurance_mas_protection.initModel(sequelize);
  insurance_price.initModel(sequelize);
  mas_age_range.initModel(sequelize);
  mas_beneficiary_relation.initModel(sequelize);
  mas_district.initModel(sequelize);
  mas_installment.initModel(sequelize);
  mas_insurance_type.initModel(sequelize);
  mas_marital_status.initModel(sequelize);
  mas_occupation.initModel(sequelize);
  mas_payer_relation.initModel(sequelize);
  mas_province.initModel(sequelize);
  mas_ref_policy_rel.initModel(sequelize);
  mas_sub_district.initModel(sequelize);
  mas_title_name.initModel(sequelize);
  match_protection_plan.initModel(sequelize);

  insurance_mas_plan.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_plan, { as: "insurance_mas_plans", foreignKey: "insurance_id"});
  insurance_mas_protection.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_protection, { as: "insurance_mas_protections", foreignKey: "insurance_id"});
  match_protection_plan.belongsTo(insurance_mas_plan, { as: "mas_plan", foreignKey: "mas_plan_id"});
  insurance_mas_plan.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_plan_id"});
  match_protection_plan.belongsTo(insurance_mas_protection, { as: "mas_protection", foreignKey: "mas_protection_id"});
  insurance_mas_protection.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_protection_id"});
  insurance_price.belongsTo(mas_age_range, { as: "mas_age_range", foreignKey: "mas_age_range_id"});
  mas_age_range.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_age_range_id"});
  mas_sub_district.belongsTo(mas_district, { as: "district", foreignKey: "district_id"});
  mas_district.hasMany(mas_sub_district, { as: "mas_sub_districts", foreignKey: "district_id"});
  insurance_price.belongsTo(mas_installment, { as: "mas_installment", foreignKey: "mas_installment_id"});
  mas_installment.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_installment_id"});
  insurance.belongsTo(mas_insurance_type, { as: "mas_insurance_type", foreignKey: "mas_insurance_type_id"});
  mas_insurance_type.hasMany(insurance, { as: "insurances", foreignKey: "mas_insurance_type_id"});
  mas_district.belongsTo(mas_province, { as: "province", foreignKey: "province_id"});
  mas_province.hasMany(mas_district, { as: "mas_districts", foreignKey: "province_id"});

  return {
    SequelizeMeta: SequelizeMeta,
    insurance: insurance,
    insurance_mas_plan: insurance_mas_plan,
    insurance_mas_protection: insurance_mas_protection,
    insurance_price: insurance_price,
    mas_age_range: mas_age_range,
    mas_beneficiary_relation: mas_beneficiary_relation,
    mas_district: mas_district,
    mas_installment: mas_installment,
    mas_insurance_type: mas_insurance_type,
    mas_marital_status: mas_marital_status,
    mas_occupation: mas_occupation,
    mas_payer_relation: mas_payer_relation,
    mas_province: mas_province,
    mas_ref_policy_rel: mas_ref_policy_rel,
    mas_sub_district: mas_sub_district,
    mas_title_name: mas_title_name,
    match_protection_plan: match_protection_plan,
  };
}
