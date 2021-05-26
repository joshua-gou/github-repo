import { InjectionToken } from "@angular/core";
import { environment as env } from "./environment";
import { IEnvironment } from "./environment.interface";

export const ENV_TOKEN = new InjectionToken<IEnvironment>(
    'env.token',
    {
        providedIn: 'root',
        factory: () => { return env; }
    }
)