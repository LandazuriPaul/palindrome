import { Logger } from '~/lib/logger';

export class Service {
  protected readonly logger = new Logger(this.constructor.name);
}
