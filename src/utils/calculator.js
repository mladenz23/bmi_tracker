export default function calculateBMI(age, height, weight) {
  if (age <= 0 || height <= 0 || weight <= 0) {
    return 0;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  return bmi.toFixed(2);
}