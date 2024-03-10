export const isTeacher = (userId?: string | null) => {
 if (!userId || !process.env.NEXT_PUBLIC_TEACHER_ID) {
  return false; // Return false if userId or NEXT_PUBLIC_TEACHER_ID is not provided
  }
   const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID.split(',');

return teacherIds.includes(userId);
}
