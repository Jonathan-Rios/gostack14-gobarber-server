import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    /* Necessário criar uma data futura para teste, 
    para não conflitar a data que o teste for rodado ( Mês já ter passado, ser um dia anterior ou algo do tipo )*/

    const testDate = new Date();
    testDate.setFullYear(testDate.getFullYear() + 1, 0, 5);

    const year = testDate.getFullYear();
    const month = testDate.getMonth();

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 8, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 9, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 10, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 11, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 12, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 13, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 14, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 15, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 16, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 20, 17, 0, 0), // Mês começa no Zero
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user-id',
      date: new Date(year, month, 21, 8, 0, 0), // Mês começa no Zero
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'provider_id',
      year: year,
      month: month + 1,  // Mês NÃO começa no Zero
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
