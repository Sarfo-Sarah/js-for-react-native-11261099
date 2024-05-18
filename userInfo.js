import{newString} from './arrayManipulation'
names = ['Isaac','Enoch','joshua','Addison','jones']

function createUserProfiles(names, modifiedNames) {
    
    if (names.length !== modifiedNames.length) {
      throw new Error("Input arrays must have the same length");
    }
  
   
    const userProfiles = [];
    let id = 1;
  
    
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
  
      userProfiles.push({
        id,
        originalName,
        modifiedName,
      });
  
      
      id++;
    }
  
    return userProfiles;
  }
  console.log(createUserProfiles(names,newString))
  