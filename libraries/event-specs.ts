
/** 
 * this library is used only to define the format of events received or of any other data structures we use
 * in other library files. 
 */


interface StringsMap{
    [key:string]: string
};

interface AuthenticationResult {
    status: string,
    reason: string,
    error?: string,
    claims: any, 
    "client-certificates"?:any
};

/**
 * in general, this is one way to defined an incoming http request
 * besides the "standard" fields you would expect such as request-method, uri, headers, body
 * there are others added by our http-server-gateway, in order to simplify handling of incoming requests 
 */
interface HttpRequest {
    "request-method": string,
    "uri": string,
    "headers":StringsMap,
    "query-string"?: string,
    "query-params"?: StringsMap,
    "form-params"?:StringsMap,
    "params"?: StringsMap
    "body"?: any,
    "uri-path"?: [string],
    "uri-label"?: string,
    "authentication"?:AuthenticationResult
}