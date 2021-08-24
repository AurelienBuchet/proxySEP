const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 8090;
const HOST = "localhost";

const API_BILLING_SERVICE_URL = "http://localhost:8081";
const API_CLAIM_SERVICE_URL = "http://localhost:8082";
const API_DMS_SERVICE_URL = "http://localhost:8083";
const API_DOC_SERVICE_URL = "http://localhost:8084";
const API_LOG_SERVICE_URL = "http://localhost:8085";
const API_PARTY_SERVICE_URL = "http://localhost:8086";
const API_POLICY_SERVICE_URL = "http://localhost:8087";
const API_PRICING_SERVICE_URL = "http://localhost:8088";
const API_SALESFORCE_SERVICE_URL = "http://localhost:8089";


// Logging
app.use(morgan('dev'));

 // Proxy endpoints
app.use('/billing', createProxyMiddleware({
    target: API_BILLING_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/claim', createProxyMiddleware({
    target: API_CLAIM_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/dms', createProxyMiddleware({
    target: API_DMS_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/doc', createProxyMiddleware({
    target: API_DOC_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/log', createProxyMiddleware({
    target: API_LOG_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/party', createProxyMiddleware({
    target: API_PARTY_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/public/party', createProxyMiddleware({
    target: API_PARTY_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/policy', createProxyMiddleware({
    target: API_POLICY_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/pricing', createProxyMiddleware({
    target: API_PRICING_SERVICE_URL,
    changeOrigin: true,
 }));

 app.use('/salesforce', createProxyMiddleware({
    target: API_SALESFORCE_SERVICE_URL,
    changeOrigin: true,
 }));

 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });