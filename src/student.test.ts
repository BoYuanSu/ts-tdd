import { describe, expect, test } from 'vitest';
import { Student } from './student';

describe('student', () => {
  test('getFullName', () => {
    const student = new Student('Taro', 'Yamada');

    expect(student.getFullName()).toBe('Taro Yamada');
    student.getFullName();
  });
});
