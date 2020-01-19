import { LoggerLevel } from '~/domain/enums';

export class Logger {
  private static DEFAULT_LOGGER_NAME = 'default';
  private name: string;

  constructor(serviceName: string = Logger.DEFAULT_LOGGER_NAME) {
    this.name = serviceName;
  }

  public info(msg) {
    this.logMessageWithServiceName(LoggerLevel.INFO, msg);
  }

  public debug(msg) {
    this.logMessageWithServiceName(LoggerLevel.DEBUG, msg);
  }

  public http(msg) {
    this.logMessageWithServiceName(LoggerLevel.HTTP, msg);
  }

  public warn(msg) {
    this.logMessageWithServiceName(LoggerLevel.WARN, msg);
  }

  public error(msg) {
    this.logMessageWithServiceName(LoggerLevel.ERROR, msg);
  }

  private logMessageWithServiceName(level: LoggerLevel, msg) {
    const output = {
      service: this.name,
      level,
      msg,
    };

    // NOTE: The console is not a good logger is much better for many reasons — see README.md
    console.log(JSON.stringify(output, null, 2));
  }
}
