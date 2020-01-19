import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import Joi from '@hapi/joi';

import { EnvConfig } from '~/domain/interfaces';
import { Service } from '~/lib/service';

export class Config extends Service {
  private static instance: Config;
  private static DEFAULT_ENVIRONMENT = 'local';
  private static TEST_ENVIRONMENT = 'test';

  private readonly configSchema: Joi.SchemaMap = {
    SERVER_PORT: Joi.number().required(),
  };
  private envConfig: EnvConfig;

  constructor() {
    super();
    if (!Config.instance) {
      this.init();
      Config.instance = this;
    }
    return Config.instance;
  }

  private init() {
    const env =
      process.env.NODE_ENV && process.env.NODE_ENV !== Config.TEST_ENVIRONMENT
        ? process.env.NODE_ENV
        : Config.DEFAULT_ENVIRONMENT;
    const envFilePath = `${env}.env`;
    const envConfig = dotenv.parse(readFileSync(envFilePath));
    this.envConfig = this.validateInput(envConfig);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const schema: Joi.ObjectSchema = Joi.object(this.configSchema);
    const { error, value: validatedEnvConfig } = schema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    const config = Object.keys(envConfig).reduce((obj, key) => {
      obj[key] = envConfig[key];
      return obj;
    }, {});
    this.logger.info({ 'API configuration': config });
    return validatedEnvConfig;
  }

  /**
   * getters
   */
  get port(): number {
    return parseInt(this.envConfig.SERVER_PORT);
  }
}
