import {visionTool} from '@sanity/vision'
import { structureTool } from 'sanity/structure';
import { defineConfig } from "sanity";
import schemas from './sanity/schemas';

const projectId = process.env.SANITY_PROJECT!;
const dataset = process.env.SANITY_DATASET!;

const config = defineConfig({
    projectId,
    dataset,
    title: 'My Personal Website',
    apiVersion: '2024-02-15',
    basePath: '/admin',
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }
});

export default config;