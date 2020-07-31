export default interface IApiConfiguration {
  port: number;

  database: {
    mongoUri: string;
    mongoDatabase: string;
  };

  secret: string;
}
