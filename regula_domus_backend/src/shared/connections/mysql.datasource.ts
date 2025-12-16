import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root123',
        database: 'regula_domus',
        entities: [
            __dirname + '/../../**/*.schema{.ts,.js}',
        ],
        synchronize: true,
      });

      console.log({
        vaor: __dirname + '/../../**/*.schema{.ts,.js}',
      })

      return dataSource.initialize();
    },
  },
];