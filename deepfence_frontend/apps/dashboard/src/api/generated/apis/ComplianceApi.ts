/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  IngestersCompliance,
  ModelComplianceScanResult,
  ModelComplianceScanStatusResp,
  ModelComplianceScanTriggerReq,
  ModelScanListReq,
  ModelScanListResp,
  ModelScanResultsReq,
  ModelScanStatusReq,
  ModelScanTriggerResp,
  SearchSearchCountResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    IngestersComplianceFromJSON,
    IngestersComplianceToJSON,
    ModelComplianceScanResultFromJSON,
    ModelComplianceScanResultToJSON,
    ModelComplianceScanStatusRespFromJSON,
    ModelComplianceScanStatusRespToJSON,
    ModelComplianceScanTriggerReqFromJSON,
    ModelComplianceScanTriggerReqToJSON,
    ModelScanListReqFromJSON,
    ModelScanListReqToJSON,
    ModelScanListRespFromJSON,
    ModelScanListRespToJSON,
    ModelScanResultsReqFromJSON,
    ModelScanResultsReqToJSON,
    ModelScanStatusReqFromJSON,
    ModelScanStatusReqToJSON,
    ModelScanTriggerRespFromJSON,
    ModelScanTriggerRespToJSON,
    SearchSearchCountRespFromJSON,
    SearchSearchCountRespToJSON,
} from '../models';

export interface CountResultsComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface IngestCompliancesRequest {
    ingestersCompliance?: Array<IngestersCompliance> | null;
}

export interface ListComplianceScanRequest {
    modelScanListReq?: ModelScanListReq;
}

export interface ResultsComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface StartComplianceScanRequest {
    modelComplianceScanTriggerReq?: ModelComplianceScanTriggerReq;
}

export interface StatusComplianceScanRequest {
    modelScanStatusReq?: ModelScanStatusReq;
}

export interface StopComplianceScanRequest {
    modelComplianceScanTriggerReq?: ModelComplianceScanTriggerReq;
}

/**
 * ComplianceApi - interface
 * 
 * @export
 * @interface ComplianceApiInterface
 */
export interface ComplianceApiInterface {
    /**
     * Get Compliance Scans results on agent or registry
     * @summary Get Compliance Scans Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    countResultsComplianceScanRaw(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>>;

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    countResultsComplianceScan(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp>;

    /**
     * Ingest compliance issues found while scanning the agent
     * @summary Ingest Compliances
     * @param {Array<IngestersCompliance>} [ingestersCompliance] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    ingestCompliancesRaw(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    ingestCompliances(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get Compliance Scans list on agent or registry
     * @summary Get Compliance Scans List
     * @param {ModelScanListReq} [modelScanListReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    listComplianceScanRaw(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>>;

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    listComplianceScan(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp>;

    /**
     * Get Compliance Scans results on agent or registry
     * @summary Get Compliance Scans Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    resultsComplianceScanRaw(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResult>>;

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    resultsComplianceScan(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResult>;

    /**
     * Start Compliance Scan on agent or registry
     * @summary Start Compliance Scan
     * @param {ModelComplianceScanTriggerReq} [modelComplianceScanTriggerReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanTriggerResp>>;

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    startComplianceScan(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanTriggerResp>;

    /**
     * Get Compliance Scan Status on agent or registry
     * @summary Get Compliance Scan Status
     * @param {ModelScanStatusReq} [modelScanStatusReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    statusComplianceScanRaw(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanStatusResp>>;

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    statusComplianceScan(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanStatusResp>;

    /**
     * Stop Compliance Scan on agent or registry
     * @summary Stop Compliance Scan
     * @param {ModelComplianceScanTriggerReq} [modelComplianceScanTriggerReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    stopComplianceScanRaw(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    stopComplianceScan(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class ComplianceApi extends runtime.BaseAPI implements ComplianceApiInterface {

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async countResultsComplianceScanRaw(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/count/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchSearchCountRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async countResultsComplianceScan(requestParameters: CountResultsComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp> {
        const response = await this.countResultsComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    async ingestCompliancesRaw(requestParameters: IngestCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/ingest/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersCompliance?.map(IngestersComplianceToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest compliance issues found while scanning the agent
     * Ingest Compliances
     */
    async ingestCompliances(requestParameters: IngestCompliancesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestCompliancesRaw(requestParameters, initOverrides);
    }

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    async listComplianceScanRaw(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/list/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanListReqToJSON(requestParameters.modelScanListReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanListRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    async listComplianceScan(requestParameters: ListComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp> {
        const response = await this.listComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async resultsComplianceScanRaw(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanResultFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async resultsComplianceScan(requestParameters: ResultsComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResult> {
        const response = await this.resultsComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanTriggerResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/start/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelComplianceScanTriggerReqToJSON(requestParameters.modelComplianceScanTriggerReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanTriggerRespFromJSON(jsonValue));
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScan(requestParameters: StartComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanTriggerResp> {
        const response = await this.startComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    async statusComplianceScanRaw(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanStatusResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/status/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanStatusReqToJSON(requestParameters.modelScanStatusReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanStatusRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    async statusComplianceScan(requestParameters: StatusComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanStatusResp> {
        const response = await this.statusComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScanRaw(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/stop/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelComplianceScanTriggerReqToJSON(requestParameters.modelComplianceScanTriggerReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScan(requestParameters: StopComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.stopComplianceScanRaw(requestParameters, initOverrides);
    }

}
