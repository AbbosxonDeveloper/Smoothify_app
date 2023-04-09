import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
.setTitle('Smoothify social media')
.setDescription('Developing uzbek app smoothify by Abbosxon')
.build()