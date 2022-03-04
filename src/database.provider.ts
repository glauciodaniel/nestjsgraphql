import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'fasters',
        password: 'SL!pmRX5MpFWD_',
        database: 'ferrari',
        entities: [__dirname + '/../**/*.entity{.ts, .js}'],
        synchronize: true,
      }),
  },
];
