
const apiVersion = new Date().toISOString().slice(0, 10);
const projectId = process.env.SANITY_PROJECT;
const dataset = process.env.SANITY_DATASET;

const clientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true
}

export default clientConfig;