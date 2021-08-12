import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_mas_plan, insurance_mas_planId } from './insurance_mas_plan';
import type { insurance_mas_protection, insurance_mas_protectionId } from './insurance_mas_protection';
import type { mas_insurance_type, mas_insurance_typeId } from './mas_insurance_type';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface insuranceAttributes {
  id_auto: number;
  id: string;
  code_id?: string;
  product_code?: string;
  name?: string;
  img_header?: string;
  img_cover?: string;
  details?: string;
  note?: string;
  status?: number;
  percentage?: number;
  isuse?: number;
  sort?: number;
  is_one_price?: number;
  insurance_category_id?: any;
  mas_insurance_type_id?: string;
  haed_highlight?: string;
  number_visitors?: number;
  user_id?: string;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
}

export type insurancePk = "id_auto";
export type insuranceId = insurance[insurancePk];
export type insuranceCreationAttributes = Optional<insuranceAttributes, insurancePk>;

export class insurance extends Model<insuranceAttributes, insuranceCreationAttributes> implements insuranceAttributes {
  id_auto!: number;
  id!: string;
  code_id?: string;
  product_code?: string;
  name?: string;
  img_header?: string;
  img_cover?: string;
  details?: string;
  note?: string;
  status?: number;
  percentage?: number;
  isuse?: number;
  sort?: number;
  is_one_price?: number;
  insurance_category_id?: any;
  mas_insurance_type_id?: string;
  haed_highlight?: string;
  number_visitors?: number;
  user_id?: string;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;

  // insurance hasMany insurance_mas_plan via insurance_id
  insurance_mas_plans!: insurance_mas_plan[];
  getInsurance_mas_plans!: Sequelize.HasManyGetAssociationsMixin<insurance_mas_plan>;
  setInsurance_mas_plans!: Sequelize.HasManySetAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  addInsurance_mas_plan!: Sequelize.HasManyAddAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  addInsurance_mas_plans!: Sequelize.HasManyAddAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  createInsurance_mas_plan!: Sequelize.HasManyCreateAssociationMixin<insurance_mas_plan>;
  removeInsurance_mas_plan!: Sequelize.HasManyRemoveAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  removeInsurance_mas_plans!: Sequelize.HasManyRemoveAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  hasInsurance_mas_plan!: Sequelize.HasManyHasAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  hasInsurance_mas_plans!: Sequelize.HasManyHasAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  countInsurance_mas_plans!: Sequelize.HasManyCountAssociationsMixin;
  // insurance hasMany insurance_mas_protection via insurance_id
  insurance_mas_protections!: insurance_mas_protection[];
  getInsurance_mas_protections!: Sequelize.HasManyGetAssociationsMixin<insurance_mas_protection>;
  setInsurance_mas_protections!: Sequelize.HasManySetAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  addInsurance_mas_protection!: Sequelize.HasManyAddAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  addInsurance_mas_protections!: Sequelize.HasManyAddAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  createInsurance_mas_protection!: Sequelize.HasManyCreateAssociationMixin<insurance_mas_protection>;
  removeInsurance_mas_protection!: Sequelize.HasManyRemoveAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  removeInsurance_mas_protections!: Sequelize.HasManyRemoveAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  hasInsurance_mas_protection!: Sequelize.HasManyHasAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  hasInsurance_mas_protections!: Sequelize.HasManyHasAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  countInsurance_mas_protections!: Sequelize.HasManyCountAssociationsMixin;
  // insurance belongsTo mas_insurance_type via mas_insurance_type_id
  mas_insurance_type!: mas_insurance_type;
  getMas_insurance_type!: Sequelize.BelongsToGetAssociationMixin<mas_insurance_type>;
  setMas_insurance_type!: Sequelize.BelongsToSetAssociationMixin<mas_insurance_type, mas_insurance_typeId>;
  createMas_insurance_type!: Sequelize.BelongsToCreateAssociationMixin<mas_insurance_type>;
  // insurance belongsTo sysm_users via user_id
  user!: sysm_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance {
    insurance.init({
    id_auto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    code_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประกันของ cigna, falcon"
    },
    product_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสโค้ดประกัน",
      unique: "product_code"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อประกัน"
    },
    img_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ภาพหัว"
    },
    img_cover: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ภาพปก"
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียด ui"
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "หมายเหตุ"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "true = ลด false = ไม่ลด"
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เปอร์เซ็นที่ลดราคา"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะใช้ข้อมูล"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เรียงลำดับ"
    },
    is_one_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "เช็คการส่ง true = gender 0 false = gender 1 or 2"
    },
    insurance_category_id: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "รหัสหมวดหมู่ประกัน"
    },
    mas_insurance_type_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประเภทประกัน",
      references: {
        model: 'mas_insurance_type',
        key: 'id'
      }
    },
    haed_highlight: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ไอคอน 3 ตัว"
    },
    number_visitors: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "จำนวนผู้เข้าชม"
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสผู้สร้างประกัน",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_auto" },
        ]
      },
      {
        name: "product_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
      {
        name: "[object Object]_mas_insurance_type_id_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "mas_insurance_type_id" },
        ]
      },
      {
        name: "sysm_users_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return insurance;
  }
}
