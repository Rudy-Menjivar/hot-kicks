import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
    withItemData,
    statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import 'dotenv/config';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-hot-kicks';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long sign in lasts
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: Add initial roles
    },
});

export default withAuth(
    config({
        // @ts-ignore
        server: {
            cors: {
                origin: [process.env.FRONTEND_URL],
                credentials: true,
            },
        },
        db: {
            adapter: 'mongoose',
            url: databaseURL,
            // TODO: Add data seeding here
        },
        lists: createSchema({
            // Schema items go here
            User,
        }),
        ui: {
            // TODO: Change this for roles
            isAccessAllowed: ({ session }) =>
                // console.log(session);
                !!session?.data,
        },
        session: withItemData(statelessSessions(sessionConfig), {
            // GraphQL Query
            User: 'id name email',
        }),
    })
);