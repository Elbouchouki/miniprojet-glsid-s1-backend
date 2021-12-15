"use strict";

module.exports = {
  up: async (queryInterface) => {
    const rolesList = [
      {
        role_name: "admin", //1
      },
      {
        role_name: "medecin", //2
      },
      {
        role_name: "infirmier", //3
      },
      {
        role_name: "patient", //4
      },
    ];
    const permissionList = [
      {
        //1
        libelle_permission: "add_admin",
        type_permission: "add",
      },
      {
        //2
        libelle_permission: "add_medecin",
        type_permission: "add",
      },
      {
        //3
        libelle_permission: "add_infirmier",
        type_permission: "add",
      },
      {
        //4
        libelle_permission: "add_patient",
        type_permission: "add",
      },
      {
        //5
        libelle_permission: "update_admin",
        type_permission: "update",
      },
      {
        //6
        libelle_permission: "update_medecin",
        type_permission: "update",
      },
      {
        //7
        libelle_permission: "update_infirmier",
        type_permission: "update",
      },
      {
        //8
        libelle_permission: "update_patient",
        type_permission: "update",
      },

      {
        //9
        libelle_permission: "delete_admin",
        type_permission: "delete",
      },
      {
        //10
        libelle_permission: "delete_medecin",
        type_permission: "delete",
      },
      {
        //11
        libelle_permission: "delete_infirmier",
        type_permission: "delete",
      },
      {
        //12
        libelle_permission: "delete_patient",
        type_permission: "delete",
      },

      {
        //13
        libelle_permission: "page_admin",
        type_permission: "page",
      },
      {
        //14
        libelle_permission: "page_medecin",
        type_permission: "page",
      },
      {
        //15
        libelle_permission: "page_infirmier",
        type_permission: "page",
      },
      {
        //16
        libelle_permission: "page_patient",
        type_permission: "page",
      },
      {
        //17
        libelle_permission: "page_settings",
        type_permission: "page",
      },
      {
        //18
        libelle_permission: "page_dashboard",
        type_permission: "page",
      },
    ];
    const firstRoleID = await queryInterface.bulkInsert("Roles", rolesList, {
      returning: true,
    });
    const firstPermID = await queryInterface.bulkInsert(
      "Permissions",
      permissionList,
      {
        returning: true,
      }
    );
    const rolePermissionList = [
      //1
      {
        permission_id: firstPermID,
        role_id: firstRoleID,
      },
      //2
      {
        permission_id: firstPermID + 1,
        role_id: firstRoleID,
      },
      //3
      {
        permission_id: firstPermID + 2,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 2,
        role_id: firstRoleID + 1,
      },

      //4
      {
        permission_id: firstPermID + 3,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 3,
        role_id: firstRoleID + 1,
      },
      {
        permission_id: firstPermID + 3,
        role_id: firstRoleID + 2,
      },

      //5
      {
        permission_id: firstPermID + 4,
        role_id: firstRoleID,
      },
      //6
      {
        permission_id: firstPermID + 5,
        role_id: firstRoleID,
      },
      //7
      {
        permission_id: firstPermID + 6,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 6,
        role_id: firstRoleID + 1,
      },

      //8
      {
        permission_id: firstPermID + 7,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 7,
        role_id: firstRoleID + 1,
      },
      {
        permission_id: firstPermID + 7,
        role_id: firstRoleID + 2,
      },

      //9
      {
        permission_id: firstPermID + 8,
        role_id: firstRoleID,
      },
      //10
      {
        permission_id: firstPermID + 9,
        role_id: firstRoleID,
      },
      //11
      {
        permission_id: firstPermID + 10,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 10,
        role_id: firstRoleID + 1,
      },
      //12
      {
        permission_id: firstPermID + 11,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 11,
        role_id: firstRoleID + 1,
      },
      {
        permission_id: firstPermID + 11,
        role_id: firstRoleID + 2,
      },

      //13 admin page
      {
        permission_id: firstPermID + 12,
        role_id: firstRoleID,
      },
      //14 medecin page
      {
        permission_id: firstPermID + 13,
        role_id: firstRoleID,
      },
      //15 infimier page
      {
        permission_id: firstPermID + 14,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 14,
        role_id: firstRoleID + 1,
      },
      //16 patient page
      {
        permission_id: firstPermID + 15,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 15,
        role_id: firstRoleID + 1,
      },
      {
        permission_id: firstPermID + 15,
        role_id: firstRoleID + 2,
      },
      //17 settings page
      {
        permission_id: firstPermID + 16,
        role_id: firstRoleID,
      },
      //18 deshboard page
      {
        permission_id: firstPermID + 17,
        role_id: firstRoleID,
      },
      {
        permission_id: firstPermID + 17,
        role_id: firstRoleID + 1,
      },
      {
        permission_id: firstPermID + 17,
        role_id: firstRoleID + 2,
      },
    ];
    await queryInterface.bulkInsert("RolePermissions", rolePermissionList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Roles", null, {});
    await queryInterface.bulkDelete("Permissions", null, {});
    await queryInterface.bulkDelete("RolePermissions", null, {});
  },
};
