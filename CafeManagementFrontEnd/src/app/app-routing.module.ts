import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AuthGuard } from './_auth/auth.guard';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { RegisterComponent } from './register/register.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path:'',
    component:FirstpageComponent
  },
  {
    path:'',
    component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'',
    component:UserComponent, canActivate:[AuthGuard], data:{roles:['User']}
  },
  

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'forbidden',
    component:ForbiddenComponent
  },
  {
    path:'addNewProduct',
    component:AddNewProductComponent, canActivate:[AuthGuard], data:{roles:['Admin']},
  
  resolve : 
  {
    product: ProductResolveService
  }
  },
  {
    path:'all-products',
    component:AllProductsComponent,
  },
  {
    path:'showProductDetails',
    component:ShowProductDetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'productViewDetails',
    component:ProductViewDetailsComponent, 
    resolve:
    {
      product: ProductResolveService
    }
  },
  {
    path:'buyProduct',
    component:BuyProductComponent,canActivate:[AuthGuard], data:{roles:['User']},
    resolve:
    {
      productDetails: BuyProductResolverService
    }
  },
  {
    path:'cart',
    component:CartComponent,canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'orderConfirm',
    component:OrderConfirmationComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'myOrders',
    component:MyOrdersComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'orderInformation',
    component:OrderDetailsComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },
{
  path:'allproducts',
  component:AllProductsComponent
},
{
  path:'menu',
  component:MenuComponent
},
{
  path:'gallery',
  component:GalleryComponent
},
{
  path:'aboutUs',
  component:AboutUsComponent
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'allUsers',
  component:AllUsersComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
},
{
  path:'grocerylist',
  component: GroceryListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
