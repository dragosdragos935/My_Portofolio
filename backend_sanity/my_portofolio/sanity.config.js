import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { testimonials } from '../../schemas/testimonials'
export default defineConfig({
  name: 'default',
  title: 'my_portofolio',

  projectId: 'dyjlw6sp',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  
  },
})
