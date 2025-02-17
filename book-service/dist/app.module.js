"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const book_module_1 = require("./book/book.module");
const prisma_service_1 = require("./prisma.service");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const book_controller_1 = require("./book/book.controller");
const book_service_1 = require("./book/book.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            book_module_1.BookModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'AUTHOR_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'author',
                        protoPath: (0, path_1.join)(__dirname, 'proto/author.proto'),
                        url: 'localhost:50051',
                    },
                },
            ]),
        ],
        controllers: [book_controller_1.BookController],
        providers: [book_service_1.BookService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map