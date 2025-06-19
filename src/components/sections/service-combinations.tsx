'use client';

import { Card, CardContent, CardHeader, CardTitle, Badge, Button, Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { CheckCircle, Star, Crown, Clock, Award, Gem } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from "react";

const popularPackages = [
	{
		name: "Classic",
		price: "60",
		originalPrice: "65",
		duration: "1 hr 15 mins",
		popular: false,
		icon: Award,
		services: [
			{ name: "Classic Manicure", included: true },
			{ name: "Classic Pedicure", included: true }
		],
		description: "The essential for a timeless, elegant look.",
		savings: "You save $5!",
	},
	{
		name: "Essential",
		price: "70",
		originalPrice: "75",
		duration: "1 hr 35 mins",
		popular: true,
		icon: Star,
		services: [
			{ name: "Shellac Manicure", included: true },
			{ name: "Classic Pedicure", included: true }
		],
		description: "The smart choice for long-lasting hands and beautiful feet.",
		savings: "You save $5!",
	},
	{
		name: "Deluxe",
		price: "80",
		originalPrice: "90",
		duration: "2 hrs",
		popular: false,
		icon: Crown,
		services: [
			{ name: "Classic Manicure with Paraffin", included: true },
			{ name: "Spa Pedicure with Hot Stones", included: true }
		],
		description: "Your ultimate spa retreat to melt away stress.",
		savings: "You save $10!",
	},
	{
		name: "Perfection",
		price: "75",
		originalPrice: "80",
		duration: "1 hr 45 mins",
		popular: false,
		icon: Gem,
		services: [
			{ name: "Shellac Manicure", included: true },
			{ name: "Shellac Pedicure", included: true }
		],
		description: "Worry-free, chip-proof shine from head to toe.",
		savings: "You save $5!",
	},
];

export function ServicePricingComparison() {
	const isMobile = useIsMobile();
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);
	const renderPackageCard = (pkg: typeof popularPackages[0]) => {
		const Icon = pkg.icon;		return (			<Card
				key={pkg.name}
				className={`relative h-full flex flex-col transition-all duration-300 ${
					pkg.popular 
						? "border-primary/50 bg-muted/20" 
						: "border-border/50 hover:border-primary/30 bg-background"
				}`}
			>
				{pkg.popular && (
					<div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-sm font-semibold py-2 rounded-t-lg z-10">
						Most Popular
					</div>
				)}				<CardHeader className="flex-shrink-0 pt-8">
					<div className="grid grid-rows-[auto_auto_auto] gap-4">
						{/* First Row: Icon + Title + Pricing (3 columns) */}
						<div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
							{/* Icon Column */}							<div className="flex-shrink-0">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/15">
									<Icon className="h-6 w-6 text-primary" />
								</div>
							</div>
									{/* Title Column */}
							<div className="grid gap-2 min-w-0">
								<CardTitle className="text-xl font-playfair font-semibold text-foreground leading-tight">
									{pkg.name}
								</CardTitle>
								<div className="flex items-center gap-2">									<div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/40 px-3 py-1 rounded-full">
										<Clock className="h-3.5 w-3.5" />
										<span className="font-medium">{pkg.duration}</span>
									</div>
								</div>
							</div>
									{/* Pricing Column */}
							<div className="grid gap-2 items-center justify-items-end">
								<div className="text-right">
									<div className="flex items-baseline gap-2 justify-end">
										<span className="text-2xl font-bold text-primary leading-none">
											${pkg.price}
										</span>
										<span className="text-sm text-muted-foreground line-through">
											${pkg.originalPrice}
										</span>
									</div>
								</div>								<div className="flex items-center justify-end">
									<Badge 
										variant="secondary" 
										className="bg-green-100 text-green-700 border-green-200 text-xs font-semibold px-3 py-1"
									>
										✓ {pkg.savings}
									</Badge>
								</div>
							</div>
						</div>
								{/* Second Row: Description (Full Width) */}
						<div className="grid">
							<div className="text-center px-2">
								<p className="text-sm text-muted-foreground leading-relaxed italic font-medium">
									{pkg.description}
								</p>
							</div>
						</div>						{/* Third Row: Services (Full Width) */}						<div className="grid">							<div className="bg-muted/15 p-3 rounded-lg border border-muted/20">
								<h4 className="font-semibold text-xs text-foreground mb-2 flex items-center justify-center gap-1.5">
									What&apos;s Included
								</h4><div className="grid grid-cols-1 gap-0.5">
									{pkg.services.map((service, serviceIndex) => (
										<div 
											key={serviceIndex} 
											className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-md border transition-colors ${
												service.included 
													? "bg-background/70 border-muted/10 hover:bg-background/90" 
													: "bg-muted/20 border-muted/30"
											}`}
										>
											{service.included ? (
												<CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
											) : (
												<div className="h-3 w-3 rounded-full border border-muted-foreground/30 flex-shrink-0" />
											)}
											<span 
												className={`font-medium ${
													service.included 
														? "text-foreground" 
														: "text-muted-foreground/70"
												}`}
											>
												{service.name}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</CardHeader>				<CardContent className="flex-grow flex flex-col">
					{/* Action Button (Full Width) */}
					<div className="grid mt-auto pt-2">						<Button 
							variant="outline" 
							size="lg"
							className={`group/btn transition-all duration-300 w-full justify-center font-semibold text-sm ${
								pkg.popular
									? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
									: "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
							}`}
						>							<span className="flex items-center justify-center gap-2">
								{pkg.popular ? (
									<>
										<Star className="h-4 w-4" />
										Book Most Popular
									</>
								) : pkg.name === "Perfection" ? (
									<>
										<Gem className="h-4 w-4" />
										Book Perfection
									</>
								) : (
									<>
										Book {pkg.name}
									</>
								)}
							</span>
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	};
	return (
		<Section variant="muted" className="py-16" id="packages">
			<div className="container">				<SectionHeader
					badge="Nail Care Packages"
					title="Service Combinations That Save You More"
					description="Choose from our curated service combinations designed to give you the perfect nail care experience at unbeatable value. Each package combines complementary services for maximum savings and beauty."
				/>{" "}
				{/* Mobile Carousel */}
				{isMobile ? (
					<div className="relative px-[-4px]">
						<div className="-mx-4">
							<Carousel
								setApi={setApi}
								opts={{
									align: "start",
									loop: false,
									dragFree: false,
									containScroll: "trimSnaps",
								}}
								className="w-full"
							>
								<CarouselContent className="ml-4">
									{popularPackages.map((pkg) => (
										<CarouselItem key={pkg.name} className="mr-4 basis-[90%] sm:basis-[75%] md:basis-[60%]">
											{renderPackageCard(pkg)}
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>

						{/* Interactive Dots indicator */}
						<div className="flex justify-center mt-6 gap-2">
							{popularPackages.map((_, index) => (
								<button
									key={index}
									className={`w-2 h-2 rounded-full transition-colors ${
										index === current
											? "bg-primary"
											: "bg-muted-foreground/30 hover:bg-muted-foreground/50"
									}`}
									onClick={() => api?.scrollTo(index)}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</div>				) : (
					/* Desktop Grid */
					<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
						{popularPackages.map((pkg) => renderPackageCard(pkg))}
					</div>
				)}
			</div>
		</Section>
	);
}