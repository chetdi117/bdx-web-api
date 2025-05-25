import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionFilter, TransformInterceptor } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('BDX API')
    .setDescription('API documentation for BDX application')
    .setVersion('1.0')
    .addBearerAuth() // Thêm xác thực JWT nếu cần
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
