export function calculateBMI(age, height, weight) {
  if (age === '' || height === '' || weight === '') return '';

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi > 100) return '100+';

  return bmi.toFixed(2);
}

export function getCategory(bmi) {
  const tips = {
    low: 'Your BMI is below the normal range. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
    normal:
      'Your BMI is within the normal range. Keep up the good work and maintain a healthy lifestyle!',
    high: 'Your BMI is above the normal range. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
    obese:
      'Your BMI indicates obesity. It is important to maintain a healthy weight. Consider consulting a healthcare professional for personalized advice.',
  };

  if (bmi < 18.5) {
    return tips.low;
  } else if (bmi >= 18.5 && bmi < 25) {
    return tips.normal;
  } else if (bmi >= 25 && bmi < 30) {
    return tips.high;
  } else if (bmi >= 30) {
    return tips.obese;
  } else {
    return 'How does being tied to your bed feel buddy?';
  }
}
