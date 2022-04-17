function construction(input){

    if(input.dizziness){
        input.levelOfHydrated += 0.1 * input.weight * input.experience;
        input.dizziness = false;
    }

    return input
}

console.log(construction({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }

  ));