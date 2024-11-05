import { z } from 'zod';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

 export const formSchemaStepOne = z.object( {
	name: z.string().min( 3, {message: t('error_name')}),
	nationalty: z.string().min(3, {message: t('error_id_input')}),
	id: z.string(),
	status: z.string(),
	birth: z.string().min(2, {message: t('error_birth_input')}),
	gender: z.string().min(3, {message: t('error_gender_input')}),
	socialStatus: z.string().min(3, {message: t('error_status_input')})
} );

export const formSchemaStepTwo = z.object({
	workStatus: z.string().min( 2, {message: t('error_work_status')}),
	workSector: z.string().min(2, {message: t('error_type_employment')}),
	jobTitle: z.string().min(4, {message: t('error_job_title')}),
	servicePeriod: z.string().min(1, {message: t('length_of_functional_service')}),
} );


export const formSchemaStepThree = z.object({
	chronicDiseases: z.string().min( 3, {message: t('error_chronic_diseases')}),
	nameOfDisease: z.string().min(3, {message: t('error_name_of_disease')}),
} );

export const formSchemaStepFour = z.object({
	city: z.string().min( 3, {message: t('error_city')}),
	live: z.string().min(3, {message: t('erorr_place_you_live')}),
	phoneNo: z.string().min(5, {message: t('error_phone_no')}),
	email: z.string().min(3, {message: t('error_email')}),
} )