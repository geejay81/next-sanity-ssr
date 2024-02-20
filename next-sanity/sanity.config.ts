import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { defineConfig } from "sanity";
import schemas from './sanity/schemas';

const apiVersion = 'v1'; //new Date().toISOString().slice(0, 10);

const config = defineConfig({
    projectId: 'p50gl6b8',
    dataset: 'production',
    title: 'Greg website',
    apiVersion: apiVersion,
    basePath: '/admin',
    plugins: [structureTool(), visionTool(), codeInput()],
    schema: { types: schemas }
});

export default config;