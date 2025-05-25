import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    // Xử lý lỗi toàn cục ở đây
    console.error('Caught exception:', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message: string | string[] =
      exception instanceof HttpException
        ? (exception.getResponse() as { message?: string })?.message ||
          exception.message
        : 'Internal server error';

    response.status(status).json({
      statusCode: status,
      message,
      data: null,
      success: false,
      errorCode: 0,
    });
  }
}
