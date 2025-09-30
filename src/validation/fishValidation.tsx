import { Fish } from '../api/fishApi';

export type FishInput = Omit<Fish, "id">;
export type FishErrors = Partial<Record<keyof FishInput, string>>;

export const validateFish = (values: FishInput): FishErrors => {
    const errors: FishErrors = {};

    if (!values.name.trim()) {
        errors.name = "Navn kan ikke være tomt";
    }
    if (!values.species.trim()) {
        errors.species = "Art kan ikke være tom";
    }
    if (values.length <= 0) {
        errors.length = "Lengde må være større enn 0";
    }
    if (values.weight <= 0) {
        errors.weight = "Vekt må være større enn 0";
    }

    return errors;
};