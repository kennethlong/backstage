/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AuthorizeRequestContext,
  AuthorizeRequest,
  AuthorizeResponse,
  AuthorizeFiltersResponse,
} from '@backstage/permission-common';
import { BackstageIdentity } from '@backstage/plugin-auth-backend';

export interface PermissionHandler {
  // TODO(timbonicus/joeporpeglia): We lose the generic and typing since we're passed all types of requests here; can we restore this somehow? Type guard shouldHandle method?
  // <T extends AuthorizeRequestContext = AuthorizeRequestContext>
  handle(
    request: AuthorizeRequest<AuthorizeRequestContext>,
    user?: BackstageIdentity,
  ): Promise<AuthorizeResponse>;

  authorizeFilters(
    request: AuthorizeRequest<AuthorizeRequestContext>,
    user?: BackstageIdentity,
  ): Promise<AuthorizeFiltersResponse>;
}