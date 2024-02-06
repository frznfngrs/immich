/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { APIKeyResponseDto } from './APIKeyResponseDto';
import {
    APIKeyResponseDtoFromJSON,
    APIKeyResponseDtoFromJSONTyped,
    APIKeyResponseDtoToJSON,
} from './APIKeyResponseDto';

/**
 * 
 * @export
 * @interface APIKeyCreateResponseDto
 */
export interface APIKeyCreateResponseDto {
    /**
     * 
     * @type {APIKeyResponseDto}
     * @memberof APIKeyCreateResponseDto
     */
    apiKey: APIKeyResponseDto;
    /**
     * 
     * @type {string}
     * @memberof APIKeyCreateResponseDto
     */
    secret: string;
}

/**
 * Check if a given object implements the APIKeyCreateResponseDto interface.
 */
export function instanceOfAPIKeyCreateResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiKey" in value;
    isInstance = isInstance && "secret" in value;

    return isInstance;
}

export function APIKeyCreateResponseDtoFromJSON(json: any): APIKeyCreateResponseDto {
    return APIKeyCreateResponseDtoFromJSONTyped(json, false);
}

export function APIKeyCreateResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIKeyCreateResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKey': APIKeyResponseDtoFromJSON(json['apiKey']),
        'secret': json['secret'],
    };
}

export function APIKeyCreateResponseDtoToJSON(value?: APIKeyCreateResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiKey': APIKeyResponseDtoToJSON(value.apiKey),
        'secret': value.secret,
    };
}
