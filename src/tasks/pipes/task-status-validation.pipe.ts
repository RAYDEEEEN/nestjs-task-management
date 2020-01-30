import { TaskStatus } from '../task-status.enum';
import { PipeTransform, BadRequestException } from '@nestjs/common';
import e = require('express');

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatues = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {

    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`)
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatues.indexOf(status);
    return idx !== -1;
  }
}