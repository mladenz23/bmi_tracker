import bulbBlue from '../assets/images/bulb-blue.png';
import bulbGreen from '../assets/images/bulb-green.png';
import bulbYellow from '../assets/images/bulb-yellow.png';
import bulbRed from '../assets/images/bulb-red.png';

export function calculateBMI(age, height, weight) {
  if (!age || !height || !weight) return '';

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi > 100) return '100+';

  return bmi.toFixed(2);
}

export function getData(bmi) {
  const data = [
    {
      tip: 'bruh...',
      color: 'text-main',
    },

    {
      tip: 'Your BMI is below the normal range. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
      color: 'low',
      img: bulbBlue,
    },

    {
      tip: 'Your BMI is within the normal range. Keep up the good work and maintain a healthy lifestyle!',
      color: 'normal',
      img: bulbGreen,
    },

    {
      tip: 'Your BMI is above the normal range. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
      color: 'overweight',
      img: bulbYellow,
    },

    {
      tip: 'Your BMI indicates obesity. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
      color: 'obese',
      img: bulbRed,
    },
  ];

  if (bmi < 18.5) return data[1];
  if (bmi >= 18.5 && bmi < 25) return data[2];
  if (bmi >= 25 && bmi < 30) return data[3];
  if (bmi >= 30) return data[4];
  else return data[0];
}