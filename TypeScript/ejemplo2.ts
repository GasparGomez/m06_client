export {}

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

// console.log(user.nombre); => Error, no existe!

console.log(user.name);

