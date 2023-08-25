export const getAge: (birthday: string) => number = (birthday: string) => {
    const now = new Date();
    const birth = new Date(birthday);
    let age = now.getFullYear() - birth.getFullYear();
    const diffMonths = now.getMonth() - birth.getMonth();
    if (diffMonths < 0 || (diffMonths === 0 && now.getDate() < birth.getDate())) age--;
    return age;
}