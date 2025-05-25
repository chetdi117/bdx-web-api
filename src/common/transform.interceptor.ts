import { Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';
import { BaseAPiResponse } from 'src/dto';
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, BaseAPiResponse<T>>
{
  intercept(context: any, next: any): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return next.handle().pipe(
      map((data) => ({
        success: true,
        statusCode: 200,
        message: 'success',
        data,
      })),
    );
  }
}
