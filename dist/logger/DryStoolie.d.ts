import { ILogger } from './Logger';
export default class DryStoolie implements ILogger {
    withFields(): DryStoolie;
    withField(): DryStoolie;
    withError(): DryStoolie;
    withType(): DryStoolie;
    withCategory(): DryStoolie;
    silly(): DryStoolie;
    debug(): DryStoolie;
    verbose(): DryStoolie;
    info(): DryStoolie;
    warn(): DryStoolie;
    error(): DryStoolie;
}
