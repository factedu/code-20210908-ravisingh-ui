export interface User{
    id:number,
    Gender:string,
    HeightCm: number,
    WeightKg: number,
    bmi: number,
    bmiCategory: string,
    healthRisk: string,
    created_at?: string,
    updated_at?: string
}