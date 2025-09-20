// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set permissions for public role
    const setPublicPermissions = async () => {
      try {
        const publicRole = await strapi
          .query('plugin::users-permissions.role')
          .findOne({ where: { type: 'public' } });

        if (publicRole) {
          // Get all API content types
          const contentTypes = [
            'api::main-page.main-page',
            'api::about-page.about-page',
            'api::header.header',
            'api::footer.footer',
            'api::lets-connect-page.lets-connect-page'
          ];

          for (const contentType of contentTypes) {
            await strapi.query('plugin::users-permissions.permission').updateMany({
              where: {
                role: publicRole.id,
                action: `${contentType}.find`
              },
              data: { enabled: true },
            });

            await strapi.query('plugin::users-permissions.permission').updateMany({
              where: {
                role: publicRole.id,
                action: `${contentType}.findOne`
              },
              data: { enabled: true },
            });
          }

          console.log('✅ Public permissions set successfully');
        }
      } catch (error) {
        console.error('❌ Error setting public permissions:', error);
      }
    };

    await setPublicPermissions();
  },
};
