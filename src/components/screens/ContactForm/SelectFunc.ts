import {
	cities,
	akmolinskayaOblast,
	aktyubinskayaOblast,
	almatinskayaOblast,
	almaty,
	astana,
	atyrauskaya,
	vostochnoKazakhstanskayaOblast,
	zhambylskaya,
	zko,
	karagandinskaya,
	kostanajskaya,
	kyzylordinskaya,
	mangystauskaya,
	pavlodarskaya,
	severoKazakhstanskayaOblast,
	turkestanskaya,
	shymkent,
	yuko, institutions
} from '@/components/screens/ContactForm/options'
import {
	karagandinskayaSchool,
	karagandinskayaCollege,
	karagandinskayaUniversity,
	karagandinskayaCompany,
	notFoundDefault
} from '@/components/screens/ContactForm/institutionsData'


function selectRegionFn(region: string): any {
	switch (region) {
		case 'Акмолинская':
			return akmolinskayaOblast
		case 'Актюбинская':
			return aktyubinskayaOblast
		case 'Алматинская':
			return almatinskayaOblast
		case 'Алматы':
			return almaty
		case 'Астана':
			return astana
		case 'Атырауская':
			return atyrauskaya
		case 'Восточно-Казахстанская область':
			return vostochnoKazakhstanskayaOblast
		case 'Жамбылская':
			return zhambylskaya
		case 'ЗКО':
			return zko
		case 'Карагандинская':
			return karagandinskaya
		case 'Костанайская':
			return kostanajskaya
		case 'Кызылординская':
			return kyzylordinskaya
		case 'Мангыстауская':
			return mangystauskaya
		case 'Павлодарская':
			return pavlodarskaya
		case 'Северо-Казахстанская область':
			return severoKazakhstanskayaOblast
		case 'Туркестанская':
			return turkestanskaya
		case 'Шымкент':
			return shymkent
		case 'ЮКО':
			return yuko
		default:
			return cities
	}
}

function selectInstitutionFn(region: string, city: string, institutionType: string) {
	if (region === 'Карагандинская' && city === 'Караганда' && institutionType === 'школа'
	) {
		return karagandinskayaSchool
	} else if (region === 'Карагандинская' && city === 'Караганда' && institutionType === 'колледж') {
		return karagandinskayaCollege
	} else if (region === 'Карагандинская' && city === 'Караганда' && institutionType === 'университет (бакалавриат/магистратура)') {
		return karagandinskayaUniversity
	} else if (region === 'Карагандинская' && city === 'Караганда' && institutionType === 'предприятие корпоративного университета') {
		return karagandinskayaCompany
	} else {
		return institutions
	}
}

export { selectRegionFn, selectInstitutionFn }