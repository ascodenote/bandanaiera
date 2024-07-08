import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 w-full">
      <Card x-chunk="dashboard-01-chunk-0 flex">
        <>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dasawisma</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            {/* <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p> */}
          </CardContent>
        </>
        <Icon icon="mdi:home-heart" className="h-4 w-4 text-muted-foreground" />
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Kepala Keluarga</CardTitle>

          <Icon
            icon="mdi:home-account"
            className="h-4 w-4 text-muted-foreground"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          {/* <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Jumlah Penduduk</CardTitle>

          {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
          <Icon
            icon="mdi:people-group"
            className="h-4 w-4 text-muted-foreground"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          {/* <p className="text-xs text-muted-foreground">+19% from last month</p> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Jumlah Ibu Hamil
          </CardTitle>
          <Icon
            icon="mdi:human-pregnant"
            className="h-4 w-4 text-muted-foreground"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Jumlah Balita</CardTitle>
          <Icon
            icon="mdi:kids-room"
            className="h-4 w-4 text-muted-foreground"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Jumlah Lansia</CardTitle>
          <Icon
            icon="mdi:human-white-cane"
            className="h-4 w-4 text-muted-foreground"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Jumlah Kematian</CardTitle>
          <Icon icon="mdi:dead" className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
        </CardContent>
      </Card>
    </div>
  );
}
