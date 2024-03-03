const { PrismaClient} = require("@prisma/client")
const database= new PrismaClient();

async function main(){
    try{
        await database.category.createMany({
            data:[
                {name: "Computer Science"},
                {name: "Data and Aalytics"},
                {name: "Arts and Design"},
                {name: "Humanities"},
                {name: "Buisness and Economics"},
                {name: "Mathematics"},
                {name: "Digital Media Production and Editing"},


            ]

        });
        console.log("Success");
}
catch(error){
    console.log("Error seeding the database categories ", error);
}

finally{
    await database.$disconnect
}
}

main();