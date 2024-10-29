import catalog from "./db/catalog.js";
import { generateSaleCatalog } from "./utils.js";

// console.info("Catalog before sale:", catalog);

const saleCatalog = generateSaleCatalog(catalog, 10);

console.info("Catalog after sale:", saleCatalog);
