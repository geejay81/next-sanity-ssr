import {visionTool} from '@sanity/vision'
import { structureTool } from 'sanity/structure';
import { defineConfig } from "sanity";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'p50gl6b8',
    dataset: 'production',
    title: 'Greg\'s website',
    apiVersion: '2024-02-15',
    basePath: '/admin',
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }
});

export default config;