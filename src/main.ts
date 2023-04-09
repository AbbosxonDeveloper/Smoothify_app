import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomFilter } from './filter/custom.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { config } from './config';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new CustomFilter)

  const config = app.get(ConfigService)
  const host = config.getOrThrow<string>('app.host')
  const port = config.getOrThrow<string>('app.port')

  const swagger = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app,swagger)
  await app.listen(port, host);
}
bootstrap();