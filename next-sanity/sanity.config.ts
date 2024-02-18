import { codeInput } from '@sanity/code-input';
import {visionTool} from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { defineConfig } from "sanity";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'p50gl6b8',
    dataset: 'production',
    title: 'Greg\'s website',
    apiVersion: '2024-02-18',
    basePath: '/admin',
    plugins: [structureTool(), visionTool(), codeInput()],
    schema: { types: schemas }
});

export default config;