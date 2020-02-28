const formatType = (type: string): string => {
    let color: string;
   
    switch (type) {
      case 'Feu': 
        color = 'red'; 
        break; 
      case 'Eau': 
        color = 'blue'; 
        break; 
      case 'Plante': 
        color = 'green'; 
        break; 
      case 'Insecte': 
        color = 'brown'; 
        break; 
      case 'Normal': 
        color = 'grey'; 
        break; 
      case 'Vol': 
        color = 'blue'; 
        break; 
      case 'Poison': 
        color = 'deep-purple'; 
        break; 
      case 'Fée': 
        color = 'pink lighten-1'; 
        break; 
      case 'Psy': 
        color = 'purple'; 
        break; 
      case 'Electrik': 
        color = 'amber'; 
        break; 
      case 'Combat': 
        color = 'deep-orange'; 
        break; 
      default: 
        color = 'grey'; 
        break; 
    }
   
    return `badge mr-2 ${color}`;
}

export default formatType;