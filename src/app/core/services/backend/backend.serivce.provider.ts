import { inject, InjectionToken } from "@angular/core";
import { ENV_TOKEN } from "src/environments";
import { BackendProdService } from "./backend-prod.service";
import { IBackendService } from "./backend.serivce.interface";
import { BackendService } from "./backend.service";

export const BACKEND_SERVICE_TOKEN = new InjectionToken<IBackendService>(
    'backend-service.token',
    {
        providedIn: 'root',
        factory: () => {
            const env = inject(ENV_TOKEN);
            return env.production ? inject(BackendProdService) : inject(BackendService);
        }
    }
)