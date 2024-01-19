
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard,  SearchBar, CustomFilter, Hero, Finding, WhyChoose } from "@/components";
import ShowMore from "@/components/ShowMore";
import CarDetails from "@/components/CarDetails";



export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 4,
    model: searchParams.model || "",
  });



  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <Finding/>
      <WhyChoose/>


    



      

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='flex-1 mx-auto max-w-lg text-center'>
  <p className="text-[#8C3AFF] font-semibold">Agent Insights</p>
  <h1 className='text-3xl font-extrabold text-[#2D0173]'>Unfiltered User Reviews - Discover What Our Happy Clients Say!</h1>
</div>


        {/* <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div> */}

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 4) / 4}
              isNext={(searchParams.limit || +1) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

function fetchClients(arg0: { manufacturer: string; year: number; fuel: string; limit: number; model: string; }) {
  throw new Error("Function not implemented.");
}
